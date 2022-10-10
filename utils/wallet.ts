// import { APP_NETWORKS_SUPPORT } from "connectors/constants";

// declare let window: any;

// export const setupNetwork = async (chainId?: number, library?: any) => {
//   const provider = library?.provider ?? window.ethereum ?? null;
//   if (provider) {
//     try {
//       const networkInfo = APP_NETWORKS_SUPPORT[Number(chainId)];
//       if (networkInfo) {
//         try {
//           await provider.request({
//             method: "wallet_switchEthereumChain",
//             params: [{ chainId: networkInfo.details?.chainId }],
//           });
//         } catch (error: any) {
//           //Reject metamask
//           if (error.code === 4001) {
//             return;
//           }

//           // This error code indicates that the chain has not been added to MetaMask.
//           if (error.code === 4902) {
//             try {
//               await provider.request({
//                 method: "wallet_addEthereumChain",
//                 params: [
//                   {
//                     ...(networkInfo.details || {}),
//                   },
//                 ],
//               });
//             } catch (addError) {
//               return false;
//             }
//           } else {
//             return false;
//           }
//         }
//       } else return false;
//     } catch (e) {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };
