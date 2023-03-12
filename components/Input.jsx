import { useContext } from 'react';

import { NFTContext } from '../context/NFTContext';

const Input = ({ inputType, title, placeholder, handleClick }) => {
  const { nftCurrency } = useContext(NFTContext);

  return (
    <div className="mt-10 w-full">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">{title}</p>
