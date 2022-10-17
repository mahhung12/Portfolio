export const none = {};

// import { useEffect } from 'react';
// import { cloneWith, isArray } from 'lodash';

// import selectedSocket from 'redux/socket/selector';
// import selectedAddress from 'redux/address/selector';
// import { handleRefreshSocket, handleSetSocket, handleSetSocketData } from 'redux/socket/slice';

// import { useAppDispatch, useAppSelector } from './useStore';

// import Socket from 'services/SocketService';

// export const useSocket = ({
//   event,
//   handleEvent,
//   dependences,
//   nonAuthen,
// }: {
//   event: string | string[];
//   handleEvent: any;
//   dependences?: any;
//   nonAuthen?: boolean;
// }) => {
//   const socketIo = new Socket();
//   const dispatch = useAppDispatch();

//   const { address } = useAppSelector(selectedAddress.getAddress);
//   const { instance, refresh, socketData: socketAddress } = useAppSelector(selectedSocket.getSocket);

//   useEffect(() => {
//     if (socketAddress?.address && refresh) {
//       dispatch(handleSetSocket(true));
//       dispatch(handleRefreshSocket(false));
//     }
//   }, [socketAddress?.address, instance, refresh]);

//   useEffect(() => {
//     if (address && address !== socketAddress?.address) {
//       dispatch(handleRefreshSocket(true));
//       dispatch(handleSetSocketData({ address: address }));
//     }
//   }, [address, socketAddress?.address]);

//   useEffect(() => {
//     if (address && address !== socketAddress?.address) {
//       dispatch(handleSetSocket(false));
//       socketIo.removeInstance();
//     }
//   }, [address]);

//   useEffect(() => {
//     if (address && instance && socketAddress?.address && address === socketAddress?.address) {
//       const socketInstance = socketIo.getInstance(address);
//       if (address || nonAuthen) {
//         if (typeof event === 'string') {
//           socketInstance.on(event, handleEvent);
//         } else if (isArray(event)) {
//           event.forEach((e: string) => {
//             socketInstance.on(e, handleEvent);
//           });
//         }
//       }
//       return () => {
//         if (address || nonAuthen) {
//           if (typeof event === 'string') {
//             socketInstance.off(event, handleEvent);
//           } else if (isArray(event)) {
//             event.forEach((e: string) => {
//               socketInstance.off(e, handleEvent);
//             });
//           }
//         }
//       };
//     } else {
//       socketIo.removeInstance();
//     }
//   }, [address, ...(dependences || [])]);
// };
