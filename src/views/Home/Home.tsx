import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'

const AnimeBg = styled.div`
  background-image: url('/images/city.png');
  animation: bgiLoop 20s linear infinite;
  background-repeat: repeat-x;
  background-position: top;
`

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 62px 0;

  .flex {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .text_l {
    font-size: 20px;
    color: #AEBFEB;
  }

  .mt50 {
    margin-top: 50px;
  }

  .image_w50 {
    width: 50%;
  }
`

const HomeMv = styled.div`
  margin-top: 80px;

  div.sns_links {
    margin-top: 20px;
  }

  a.sns_link {
    width: 48px;
    display: inline-block;
    margin-right: 10px;
  }
`

const StatusArea = styled.div`
  .box_wrap {
    text-align: center;
    width: 19%;
    background-color: #0C0026;
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
    background-image: linear-gradient(#000000, #000000), linear-gradient(135deg, #0947E7, #CF00F0);
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

const HomeContent = styled.div`
  h2 {
    font-size: 34px;
    margin-top: 100px;
    margin-bottom: 24px;
    line-height: 1.1;
  }

  h2 .line {
    display: block;
    width: 112px;
    height: 3px;
    border-radius: 2px;
    background: rgb(152, 30, 88);
    background: linear-gradient(90deg, rgba(152, 30, 88, 1) 0%, rgba(9, 71, 231, 1) 100%);
    margin-bottom: 30px;
  }

  .txt_center {
    text-align: center;
  }
`

const Section1 = styled.div`
`

const Section2 = styled.div`
  background-image: url('/images/homecommunity.png');
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 50px;

  .txt_left {
    text-align: left;
  }

  .txtbox {
    width: 50%;
  }
`

const Section3 = styled.div`
  .txt_right {
    text-align: right;
  }

  .txtbox {
    width: 50%;
  }
  img {
    height: 375px;
    margin: 0 auto;
    display: block;
  }
`

const Section4 = styled.div`
  .txt_left {
    text-align: left;
  }

  .txtbox {
    width: 50%;
  }
  
  img {
    height: 350px;
  }
`

const SlipPage = styled.div`
  width: 80%;
  margin: 80px auto;
  display: block;
  line-height: 50px;
  color: #ffffff;
  background-color: #000000;
  border: double 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(#000000, #000000), linear-gradient(135deg, #0947E7, #CF00F0);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .title {
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
  }

  .contract {
    background: rgb(152, 30, 88);
    background: linear-gradient(90deg, rgba(152, 30, 88, 1) 0%, rgba(9, 71, 231, 1) 100%);
    font-weight: 600;
  }
`

const Profile = styled.div`
  width: 80%;
  margin: 0 auto;
  display: block;

  .line {
    margin: 0 auto;
  }

  .profimage {
    width: 50%;

    img {
      margin: 0 auto;
      display: block;
      width: 50%;
    }
  }

  .txtbox {
    width: 50%;

    li {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      line-height: 1.8;

      .caption {
        flex: 0 0 100px;
        margin-right: 20px;
        font-weight: bold;
      }

      .text_m {

      }
    }
  }
`

const Member = styled.div`
  width: 80%;
  margin: 0 auto;
  display: block;

  .line {
    margin: 0 auto;
  }

  .flex {
    margin-bottom: 30px;
  }

  .memberimage {
    width: 20%;

    img {
      width: 80%;
    }
  }

  .txtbox {
    width: 80%;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        line-height: 1.8;

        .caption {
          flex: 0 0 100px;
          margin-right: 20px;
          font-weight: bold;
        }

        .text_m {
          font-size: 14px;
        }
      }
    }
  }
`

const Home: React.FC = () => {
  return (
    <Page>
      <AnimeBg>
        <Container>
          <HomeMv className='flex'>
            <div className="left_area">
              <div className="title mt50"><img src="/images/well.png" alt="Golden retriever finance"/></div>
              <div className="text_l">The Golden retriever platform is <br/>a community-supported platform.<br/>
                People all over the world will love Golden Retriever!
              </div>
              <div className="sns_links">
                <a href="/#" className="sns_link" target="_blank"><img src="/images/tellegram.png" alt="telegram"/></a>
                <a href="/#" className="sns_link" target="_blank"><img src="/images/twitter.png" alt="telegram"/></a>
              </div>
            </div>
            <div className="right_area">
              <div className="dogimage"><img src="/images/jump.png" alt="Golden retriever"/></div>
            </div>
          </HomeMv>
          <StatusArea className="flex mt50">
            <div className="box_wrap txt_center">
              <div className="top_area">
                <h3>Exchange</h3>
                <div className="text">Exchange tokens</div>
              </div>
              <a href="/swap" className="btn_s btn_gr bold">Swap</a>
            </div>
            <div className="box_wrap txt_center">
              <div className="top_area">
                <h3>Liquidity</h3>
                <div className="text">Make LP</div>
              </div>
              <a href="/swap" className="btn_s btn_gr bold">Add LP</a>
            </div>
            <div className="box_wrap txt_center">
              <div className="top_area">
                <h3>Farms</h3>
                <div className="text">Stake Liquidity Pool (LP)</div>
                <div className="nomber bold text_l">$183,213,017</div>
              </div>
              <a href="/swap" className="btn_s btn_gr bold">Farms</a>
            </div>
            <div className="box_wrap txt_center">
              <div className="top_area">
                <h3>Pools</h3>
                <div className="text">Just stake some tokens to earn.</div>
              </div>
              <a href="/swap" className="btn_s btn_gr bold">Pools</a>
            </div>
            <div className="box_wrap txt_center">
              <div className="top_area">
                <h3>TVL</h3>
                <div className="text">Across all LPs and Golden Retriever Pools</div>
              </div>
              <div className="nomber bold text_l">$183,213,017</div>
            </div>
          </StatusArea>
          <HomeContent>
            <Section1 className="mt50">
              <h2 className="txt_center"><span className="line mrauto"/>What is Golden Retriever finance?</h2>
              <div className="image"><img src="/images/what.png" alt="Golden retriever finance"/></div>
              <div className="text_l">Golden Retriever finance aims to build a Golden Retriever ecosystem.
                Golden Retriever finance will launch new tokens every month to build an ecosystem.
                Like the Golden Retriever, the tokens will all have very little supply.
                This can increase the value of the Golden Retriever and create scarcity for new Tokens.
                And above all, many users will be confident that Golden Retriever finance is a reliable project.
              </div>

            </Section1>
            <Section2 className="mt50">
              <div className="flex">
                <div className="image_w50"/>
                <div className="txtbox">
                  <h2 className="txt_left"><span className="line"/>100%<br/>community<br/>platform</h2>
                  <div className="text_l">Golden Retriever finance is a 100% community supported platform.
                    Many users trade, purchase and offer liquidity at Golden Retriever finance
                    Our mission is to create a huge community platform.
                  </div>
                </div>
              </div>
            </Section2>
            <Section3 className="mt50">
              <div className="flex">
                <div className="txtbox">
                  <h2 className="txt_left"><span className="line"/>Always equal</h2>
                  <div className="text_l">Golden Retriever did not conduct any ICO or pre-sale.
                    It is a coin that everyone can have equally from the beginning.
                  </div>
                </div>
                <div className="image_w50"><img src="/images/homeequal.png" alt="Golden retriever finance"/></div>
              </div>
            </Section3>
            <Section4 className="mt50">
              <div className="flex">
                <div className="image_w50"><img src="/images/homesque.png" alt="Golden retriever finance"/></div>
                <div className="txtbox">
                  <h2 className="txt_left"><span className="line"/>Schedule</h2>
                  <div className="text_l">The initial circulating supply is 8,000 coins. Swap will be available at SGT 8
                    AM on July 7, 2021. The farm will open on August 1, 2021.
                  </div>
                </div>
              </div>
            </Section4>
            <SlipPage className="txt_center">
              <div className="title">12%のスリップページを使用することをお勧めします。</div>
              <div className="contract bold"><span className="pr20">Golden retriever Contract</span>0x111111111111111111111111111111111111111111111
              </div>
            </SlipPage>
            <Profile>
              <h2 className="txt_center"><span className="line"/>Golden Retriever</h2>
              <div className="flex">
                <div className="profimage"><img className="mrauto" src="/images/dog.png"
                                                alt="Golden retriever finance"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Name</span><span className="text_m">Golden retriever</span></li>
                    <li><span className="caption">Age</span><span className="text_m">1 year old</span></li>
                    <li><span className="caption">Features</span><span className="text_m">The Golden Retriever is a large dog. Gentle character with wisdom and loyalty, Golden Retrievers are loved by many.</span>
                    </li>
                    <li><span className="caption">性格</span><span className="text_m"/></li>
                    <li><span className="caption">Dream</span><span className="text_m">I want fans all over the world to have fun playing in the dog park</span>
                    </li>
                    <li><span className="caption">Comment</span><span className="text_m">A gentle dog who loves and is loved by many. I like being loved by many people. Love and peace!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Profile>
            <Member>
              <h2 className="txt_center"><span className="line"/>Project member</h2>
              <div className="flex">
                <div className="memberimage"><img src="/images/dog1.png" alt="Engineer / Leader dog"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Playground</span><span className="text_m">Plex</span></li>
                    <li><span className="caption">Role</span><span className="text_m">Engineer / Leader dog</span></li>
                    <li><span className="caption">Personality</span><span className="text_m">A leader dog who has wisdom and loyalty, and is loved by everyone for his curiosity and mild personality.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="memberimage"><img src="/images/dog2.png" alt="Engineer dog"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Playground</span><span className="text_m">Plex</span></li>
                    <li><span className="caption">Role</span><span className="text_m">Engineer dog</span></li>
                    <li><span className="caption">Personality</span><span className="text_m">Hates communicating with people. Enjoys loneliness and the only person he talks to is the leader dog. Loves Coca-Cola and games.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="memberimage"><img src="/images/dog3.png" alt="Designer dog"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Playground</span><span className="text_m">Plex</span></li>
                    <li><span className="caption">Role</span><span className="text_m">Designer dog</span></li>
                    <li><span className="caption">Personality</span><span className="text_m">His design is so eccentric that his boss always asks him to start over. “Someday I’ll surpass Picasso!”, says the over ambitious dog all the time.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="memberimage"><img src="/images/dog4.png" alt="Marketing dog"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Playground</span><span className="text_m">Plex</span></li>
                    <li><span className="caption">Role</span><span className="text_m">Marketing dog</span></li>
                    <li><span className="caption">Personality</span><span className="text_m">A cheerful, curious and active dog. Talkative at heart and gets nagging from his boss at least once a day.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="memberimage"><img src="/images/dog5.png" alt="Large and gentle"/></div>
                <div className="txtbox">
                  <ul>
                    <li><span className="caption">Playground</span><span className="text_m">California</span></li>
                    <li><span className="caption">Role</span><span className="text_m">Drinking coffee with the leader dog. Large and gentle.</span>
                    </li>
                    <li><span className="caption">Personality</span><span className="text_m">Dog that devoted his life to making movies. Loves movies so much he can talk about them 24 hours a day. A good mentor of leader dog, he will help you immediately if you have a problem.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Member>
          </HomeContent>
        </Container>
      </AnimeBg>
    </Page>
  )
}

export default Home
