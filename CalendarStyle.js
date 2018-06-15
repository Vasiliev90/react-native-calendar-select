import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {scale, width, height} = Dimensions.get('window');
const isIphoneX = height === 812 || width === 812
let iconSize = 22;
let resultFontSize = 24;
let weekTextFontSize = 16;
let slashLength = 80;
if (width < 350) {
  resultFontSize = 20;
  weekTextFontSize = 14;
  iconSize = 20;
  slashLength = 70;
}

export default StyleSheet.create({
  container: {
    flex: 1
  },
  ctrl: {
    flex: 1.7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'stretch',
    // alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: '#f9f9f9'
  },
  result: {
    flex: 2.3,
    paddingHorizontal: 15,
    // paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  resultSlash: {
    width: slashLength,
    height: 1 / scale,
    transform: [
      {
        rotateZ: '-90deg'
      }
    ]
  },
  resultPart: {
    flex: 1
  },
  resultText: {
    fontSize: resultFontSize,
    marginVertical: 4,
    fontWeight: '200'
  },
  clearText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400'
  },
  startText: {
    textAlign: 'left'
  },
  endText: {
    textAlign: 'right'
  },
  week: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  weekText: {
    flex: 1,
    fontSize: weekTextFontSize,
    textAlign: 'center'
  },
  scroll: {
    flex: 9,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  scrollArea: {
    flex: 1
  },
  btn: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmContainer: {
    overflow: 'hidden',
    backgroundColor: '#0e3d5e',
    // backgroundColor: '#c95195',
    borderRadius: 8,
    margin: 14,
    marginBottom: isIphoneX ? 24 : 14,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  clearContainer: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0e3d5e',
    // borderColor: 'rgb(88,88,88)',
    margin: 14,
    marginBottom: isIphoneX ? 24 : 14,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  confirmContainerDisabled: {
    backgroundColor: 'rgba(201,81,149, 0.4)'
  },
  clearContainerDisabled: {
    borderColor: 'rgba(88,88,88, 0.5)',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  clearText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0e3d5e'
    // color: '#585858'
  },
  clearTextDisabled: {
    color: 'rgba(88,88,88, 0.5)'
  },
  closeIcon: {
    width: iconSize,
    height: iconSize,
    tintColor: 'black'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
