import ModelItem from "@/components/ModelItem";
import MusicItem from "@/components/MusicItem";
import { NFTType } from "@/types";

export default function Models() {
    const nfts = [
        {
            name: 'NFT Name',
            id: '0001',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0002',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0003',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0004',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0005',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0006',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0001',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0002',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0003',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0004',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0005',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0006',
            image: '/images/wave.jpg',
        },
    ]
    return (
        <div>
            <div className="font-poppins font-extrabold lg:text-[30px] text-[25px] text-white w-full text-center lg:pt-12 pt-20 pb-16">
                NFT LISTING
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-5">
                {
                    nfts.map((nft: NFTType, index: number) => (
                        <MusicItem image={nft.image} key={index} title={nft.name} />
                    ))
                }
            </div>
            <div className="my-9 mt-10">
                <button className="rounded-[45px] w-[246px] py-4 text-center text-white bg-[#819DF5] font-bold text-[19px]">View More</button>
            </div>
        </div>
    )
}