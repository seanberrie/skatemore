
const K_WIDTH = 20
const K_HEIGHT = 20
const Skateshop = 'https://i.imgur.com/yXhGraz.jpg'
const skateshopStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  backgroundImage: `url(${Skateshop})`,
  backgroundSize: '26px 26px',
  border: '1px solid black',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#EEEEE',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer',
  zindex: -1
}

export { skateshopStyle }
