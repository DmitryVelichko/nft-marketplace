import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { NFTContext } from '../context/NFTContext';
import { shortenAddress } from '../utils/shortenAddress';
import { Loader, NFTCard, SearchBar, Banner } from '../components';
import images from '../assets';

const MyNFTs = () => {
  const { fetchMyNFTsOrCreatedNFTs, currentAccount } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSelect, setActiveSelect] = useState('Recently Added');

  useEffect(() => {
    fetchMyNFTsOrCreatedNFTs('fetchMyNFTs')
      .then((items) => {
        setNfts(items);
        setNftsCopy(items);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const sortedNfts = [...nfts];

    switch (activeSelect) {
      case 'Price (low to high)':
        setNfts(sortedNfts.sort((a, b) => a.price - b.price));
        break;
      case 'Price (high to low)':
        setNfts(sortedNfts.sort((a, b) => b.price - a.price));
        break;
      case 'Recently added':
        setNfts(sortedNfts.sort((a, b) => b.tokenId - a.tokenId));
        break;
      default:
        setNfts(nfts);
        break;
    }
  }, [activeSelect]);

