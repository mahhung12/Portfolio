import { get } from 'lodash';

const connector = {
  randomRPCTestnet: (listRPC: any) => {
    const lengthList = listRPC?.length;
    const randomNumber = Math.floor(Math.random() * 10) % lengthList;
    return get(listRPC, randomNumber);
  },
};

export default connector;
