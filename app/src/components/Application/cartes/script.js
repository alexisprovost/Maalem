import React from 'react';
import { Carousel, Card as QuestionCard} from 'react-bootstrap';
import {changeRoom} from '../../Chat/Chat.js';
import handleShowChat from '../../../MainPage';
import UserProfile from '../../../UserProfile';

import "./style.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: null,
      swipedLeft: false,
      swipedRight: false,
      showCard: true,
      active: false,
      move: false,
      limit: false,
      mouseStartPosX: null,
      mouseStartPosY: null,
      mouseCurrPosX: null,
      mouseCurrPosY: null,
      Posx: null,
      Posy: null,
      k: 0.2,
      restX: 0,
      restY: 0,
      fx: 0,
      fy: 0,
      ax: 0,
      ay: 0,
      vx: 0.0,
      vy: 0.0,
      mass: 0.2,
      damping: 0.8
    };

    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.animate = this.animate.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  handleDown(e) {
    this.setState({
      move: true,
      active: true,
      mouseStartPosX: e.clientX,
      mouseStartPosY: e.clientY
    });

  }

  handleTouchStart(e) {
    e.persist();
    this.setState({
      move: true,
      active: true,
      mouseStartPosX: e.touches[0].screenX,
      mouseStartPosY: e.touches[0].screenY
    });

    console.log(this.state.mouseStartPosX);
  }

  handleMove(e) {
    if (!this.state.limit) {
      if (this.state.move) {
        let mouseCurrPosX = e.clientX;
        let mouseCurrPosY = e.clientY;
        let Posx = mouseCurrPosX - this.state.mouseStartPosX;
        let Posy = mouseCurrPosY - this.state.mouseStartPosY;
        let el = document.getElementById("card" + this.props.no);
        let height = window.innerHeight;
        let width = window.innerWidth;
        let maxX = width - width * 20 / 100;

        function map_range(value, low1, high1, low2, high2) {
          return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        }
        let mouseRange = mouseCurrPosX;
        if (mouseRange < width / 2) {
          mouseRange = width - mouseRange;
        }
        let damping = map_range(
          mouseRange,
          width / 2,
          width - width * 10 / 100,
          0.6,
          0.8);


        this.setState({
          Posx,
          Posy,
          damping,
          mouseCurrPosX,
          mouseCurrPosY
        });


        if (mouseCurrPosX > width - width * 20 / 100) {
          //Check si on swipe a la droite
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = this.state.Posx * 5;
          } else {
            restX = -this.state.Posx * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.Posy * 5;
          } else {
            restY = this.state.Posy * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.06;
          let swipedRight = true;

          setTimeout(() => { 

          //CARD ID
          //console.log(this.props.cardID);
          //DISPLAY NAME
         // console.log(this.props.displayName);
          //GOOGLE ID
          //console.log(this.props.googleID);
          console.log('carte' + this.props.cardID);
            console.log('google: ' + UserProfile.getProfile().id);
            console.log('name: ' + UserProfile.getProfile().displayName);

            window.open('/chat?user=' + UserProfile.getProfile().displayName + '&room=' + this.props.cardID, '_blank').focus();

           }, 100);
         
 
          this.handleRightSwipe('card'+this.props.no);
          this.setState({
              showCard: false,
              restX,
              restY,
              limit,
              move,
              damping
            },

            () => {
              setTimeout(() => {
                this.setState({swipedRight});
              }, 2000);
              setTimeout(() => {
                window.cancelAnimationFrame(this.animate);
              }, 10);
            });

        } else if (mouseCurrPosX < width * 20 / 100) {
          //check swipe gauche
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = -this.state.Posx * 5;
          } else {
            restX = this.state.Posx * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.Posy * 5;
          } else {
            restY = this.state.Posy * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.06;
          let swipedLeft = true;
          this.setState({
            showCard: false,
            restX,
            restY,
            limit,
            move,
            damping
          },
          
          () => {
            setTimeout(() => {
              this.setState({swipedLeft});
            }, 2000);
            setTimeout(() => {
              window.cancelAnimationFrame(this.animate);
              this.state.showCard = false;
            }, 10);
          });

        }
      }
    }
  }

  handleTouchMove(e) {
    e.persist();
    if (!this.state.limit) {
      if (this.state.move) {
        let mouseCurrPosX = e.touches[0].screenX;
        let mouseCurrPosY = e.touches[0].screenY;
        let Posx = mouseCurrPosX - this.state.mouseStartPosX;
        let Posy = mouseCurrPosY - this.state.mouseStartPosY;
        let el = document.getElementById("card" + this.props.no);
        let height = window.innerHeight;
        let width = window.innerWidth;
        let maxX = width - width * 20 / 100;

        function map_range(value, low1, high1, low2, high2) {
          return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        }
        let mouseRange = mouseCurrPosX;
        if (mouseRange < width / 2) {
          mouseRange = width - mouseRange;
        }
        let damping = map_range(
          mouseRange,
          width / 2,
          width - width * 10 / 100,
          0.6,
          0.8);


        this.setState({
          Posx,
          Posy,
          damping,
          mouseCurrPosX,
          mouseCurrPosY
        });


        if (mouseCurrPosX > width - width * 1000 / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = this.state.Posx * 5;
          } else {
            restX = -this.state.Posx * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.Posy * 5;
          } else {
            restY = this.state.Posy * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.08;
          this.setState({
              restX,
              restY,
              limit,
              move,
              damping
            },

            () => {
              setTimeout(() => {
                window.cancelAnimationFrame(this.animate);
                this.showCard = false;
              }, 10);
            });

        } else if (mouseCurrPosX < width * 10 / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = -this.state.Posx * 5;
          } else {
            restX = this.state.Posx * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.Posy * 5;
          } else {
            restY = this.state.Posy * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.08;
          this.setState({
            restX,
            restY,
            limit,
            move,
            damping
          });

        }
      }
    }
  }

  handleUp() {
    this.setState({
      move: false
    });

  }

  handleTouchEnd() {
    this.setState({
      move: false
    });

  }

  updateCard() {
    if (!this.state.move) {
      this.setState({
          fx: -this.state.k * (this.state.Posx - this.state.restX),
          fy: -this.state.k * (this.state.Posy - this.state.restY)
        },

        () => {
          this.setState({
              ax: this.state.fx / this.state.mass,
              ay: this.state.fy / this.state.mass
            },

            () => {
              this.setState({
                  vx: this.state.damping * (this.state.vx + this.state.ax),
                  vy: this.state.damping * (this.state.vy + this.state.ay)
                },

                () => {
                  this.setState({
                    Posx: this.state.Posx + this.state.vx,
                    Posy: this.state.Posy + this.state.vy
                  });

                });

            });

        });

    }
  }

  handleRightSwipe(roomName){
    var div= document.createElement("div");
    div.className += "card-overlay";
    document.getElementById("cardContainer").appendChild(div);
    changeRoom(roomName);

  }

  animate() {
    let el = document.getElementById("card" + this.props.no);
    if (
      this.state.Posx > window.innerWidth + 400 ||
      this.state.Posx < -window.innerWidth - 400) {
      cancelAnimationFrame(this.animate);
    } else {
      requestAnimationFrame(this.animate);
    }
    if (this.state.active) {
      try{
        el.style.transform =
          "translate(" +
          this.state.Posx +
          "px" +
          "," +
          this.state.Posy +
          "px) rotate(" +
          this.state.Posx / 9 +
          "deg) perspective(800px)";
        this.updateCard();
      }catch(e){
        window.location.reload();
        console.log('reloaded');
      }
    }
  }


  render() {
    let images = this.props.img;

    let verifiedImages = [];

    images.map((element, index) =>{
      let isValid = true;
      try {
        let url = new URL(element);
      } catch (_) {
        isValid = false; 
      }

      if(isValid){
        verifiedImages.push(element);
      }else{
        verifiedImages.push('https://picsum.photos/300/400');
      }
    })
   
    
  
   
   
    return (<div 
        id = {"card" + this.props.no}
        key = {this.props.no}
        className = {"card color" + this.props.no}
        onMouseDown = {this.handleDown}
        onMouseMove = {this.handleMove}
        onMouseUp = {this.handleUp}
        onMouseLeave = {this.handleUp}
        onTouchStart = {this.handleTouchStart}
        onTouchMove = {this.handleTouchMove}
        onTouchEnd = {this.handleTouchEnd}
        style = {{
          position: 'absolute',
          zIndex: 0,
          //backgroundImage: this.props.img,
          marginTop: '100px'

        }}
      >
    {this.state.showCard === true?  
    <div>
    <Carousel>
          {verifiedImages.map((element) =>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={element}
                alt="First slide"
                width="300" 
                height="400"
              />
            </Carousel.Item>
          )}

        </Carousel>

        <QuestionCard style={{ width: '300px', height: '100px', backgroundColor: '#e1e3e1', marginTop: '0px' }}>
          <QuestionCard.Body className='card-body'>
            <QuestionCard.Title>{this.props.title}</QuestionCard.Title>
            <QuestionCard.Text>{this.props.description}</QuestionCard.Text>          
          </QuestionCard.Body>
        </QuestionCard>
      </div>
      : null}
</div>
    );
         
  }
}
export default Card;