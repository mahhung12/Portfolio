// import { checkSuccessRequest } from 'services/api';
// import transactionServices from 'services/transaction';

// export const useCreateTransaction = () => {
//   const handleCreateTransaction = async (
//     data: any,
//     {
//       onSuccess,
//       onError,
//     }: { onSuccess: (id: string, data: any, isBuyFromOwner?: boolean) => void; onError: () => void },
//   ) => {
//     try {
//       const response = await transactionServices.handleCreateTransaction(data);

//       if (checkSuccessRequest(response)) {
//         const isBuyFromOwner = response?.data?.signature?.isBuyFromOwner;
//         const dataRequest = response?.data?.signature?.dataRequest || [];
//         onSuccess && onSuccess(response?.data?._id, dataRequest, isBuyFromOwner);
//       } else {
//         onError && onError();
//       }
//     } catch (error) {}
//   };

//   return {
//     onCreateTransaction: handleCreateTransaction,
//   };
// };

// export const useUpdateTransaction = () => {
//   const handleUpdateTransaction = async (
//     id: string,
//     data: any,
//     { onSuccess, onError }: { onSuccess: () => void; onError: () => void },
//   ) => {
//     try {
//       const response = await transactionServices.handleUpdateTransaction(id, data);
//       if (checkSuccessRequest(response)) {
//         if (!response?.data?.isAlreadyCompleted) {
//           onSuccess && onSuccess();
//         }
//       } else {
//         onError && onError();
//       }
//     } catch (error) {}
//   };

//   return {
//     onUpdateTransaction: handleUpdateTransaction,
//   };
// };
