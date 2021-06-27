import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import max from 'lodash/max'
import { getFarmApr } from '../../../utils/apr'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'
import { useAppDispatch } from '../../../state'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from '../../../state/farms'
import { useGetStats } from '../../../hooks/api'

const Area = styled.div`
  .box_wrap {
    text-align: center;
    width: 19%;
    background-color: #0c0026;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 0 16px rgb(7 0 27 / 20%);
  }

  .btn_gr {
    display: block;
    height: 36px;
    line-height: 31px;
    color: #ffffff;
    background-color: #000000;
    border: double 2px transparent;
    border-radius: 5px;
    background-image: linear-gradient(#000000, #000000), linear-gradient(135deg, #0947e7, #cf00f0);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .top_area {
    min-height: 86px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

const StatusArea: FC = () => {
  const [, setIsFetchingFarmData] = useState(true)
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchFarmData = async () => {
      try {
        await dispatch(fetchFarmsPublicDataAsync(nonArchivedFarms.map((nonArchivedFarm) => nonArchivedFarm.pid)))
      } finally {
        setIsFetchingFarmData(false)
      }
    }
    fetchFarmData()
  }, [dispatch, setIsFetchingFarmData])

  const highestApr = useMemo(() => {
    if (cakePrice.gt(0)) {
      const aprs = farmsLP.map((farm) => {
        // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
        if (farm.pid !== 0 && farm.multiplier !== '0X' && farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice) {
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
          return getFarmApr(new BigNumber(farm.poolWeight), cakePrice, totalLiquidity)
        }
        return null
      })

      const maxApr = max(aprs)
      return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
    return null
  }, [cakePrice, farmsLP])

  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <Area className="flex mt50">
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>Exchange</h3>
          <div className="text">Exchange tokens</div>
        </div>
        <a href="/swap" className="btn_s btn_gr bold">
          Swap
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>Liquidity</h3>
          <div className="text">Make LP</div>
        </div>
        <a href="/swap" className="btn_s btn_gr bold">
          Add LP
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>Farms</h3>
          <div className="text">Stake Liquidity Pool (LP)</div>
          <div className="nomber bold text_l">{highestApr}%</div>
        </div>
        <a href="/swap" className="btn_s btn_gr bold">
          Farms
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>Pools</h3>
          <div className="text">Just stake some tokens to earn.</div>
        </div>
        <a href="/swap" className="btn_s btn_gr bold">
          Pools
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>TVL</h3>
          <div className="text">Across all LPs and Golden Retriever Pools</div>
        </div>
        <div className="nomber bold text_l">${tvl}</div>
      </div>
    </Area>
  )
}

export default StatusArea
