import { StyleSheet } from 'react-native';

// export const PageTitle = styled.Text`

//     ${(props) => props.dashboard && `
//         font-size: 35px;
//     `}
// `;

// export const SubTitle = styled.Text`

//     ${(props) => props.dashboard && `
//         margin-bottom: 5px;
//         font-weight: normal;
//     `}
// `;

export const Titles = StyleSheet.create({
  PageTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'lightseagreen',
    padding: 10,
  },

  SubTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#E5E7EB',
  },
});
