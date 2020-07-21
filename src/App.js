import React , {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions ={
  particles: {
    number:{
      value: 100,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }                
}

const initialState = {
      input:'',
      imageUrl:'',
      boxes: {},
      route:'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''

      }
    }


class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  loadUser = (data)=> {
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // calculateFacelocation = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

  //   const image =document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return{
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width),
  //     bottomRow: height - (clarifaiFace.bottom_row * height), 
  //   }
  // }

calculateFaceLocation = (region, width, height) => {
    const faceRegion = region.region_info.bounding_box

    return {
      leftCol: faceRegion.left_col * width,
      topRow: faceRegion.top_row * height,
      rightCol: width - faceRegion.right_col * width,
      bottomRow: height - faceRegion.bottom_row * height,
    }
  }
 
  calculateFacesLocation = (data) => {
    const clarifaiFaceRegions = data.outputs[0].data.regions
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)

    const faceLocations = clarifaiFaceRegions.map((region) =>
      this.calculateFaceLocation(region, width, height)
    )

    return faceLocations
  }

  
  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes })
  }

  onInputChange = (event) => {
    this.setState({ input : event.target.value });
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input});
    
    fetch('https://infinite-wildwood-75401.herokuapp.com/imageurlfaces', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
           })
        }).then(response => response.json())

    .then(response => {
      if(response){
        fetch('https://infinite-wildwood-75401.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
           })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        }).catch(console.log)
      }
      this.displayFaceBoxes(this.calculateFacesLocation(response))
    })
     .catch(err=> console.log(err));
  }

  onRouteChange = (route) => {
    //this is the place where you can add the free login
    if(route === 'signout'){
      this.setState(initialState);
    } else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    return (
    <div className="App">
    {/*Add All the components you want in the project here*/}
     <Particles className='particles'
              params={particlesOptions}
      />
    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
    { this.state.route === 'home'
     ?  <div>
          
          <Logo />
          
          <Rank 
          name={this.state.user.name}
          entries={this.state.user.entries}
          />
          
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl} /> 
      </div>  

      : (
          this.state.route === 'signin' 
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
        )
      }
    </div>
  );
  }
}

export default App;
