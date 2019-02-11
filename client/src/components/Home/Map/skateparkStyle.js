const K_WIDTH = 20
const K_HEIGHT = 20
const Skatepark = 'https://i.imgur.com/zkWLvqK.jpg'
const skateparkStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  backgroundImage: `url(${Skatepark})`,
  backgroundSize: '27px 27px',
  border: '1px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
}

export { skateparkStyle }
