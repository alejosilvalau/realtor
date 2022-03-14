// @ts-nocheck
import {
	Box,
	ChakraComponent,
	ChakraProps,
	Flex,
	Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactChildren, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./react_augmented";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Flex justifyContent='center' alignItems='center' marginRight='1'>
			<Icon
				as={FaArrowCircleLeft}
				onClick={() => scrollPrev()}
				fontSize='2xl'
				cursor='pointer'
			/>
		</Flex>
	);
};
const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Flex justifyContent='center' alignItems='center' marginLeft='1'>
			<Icon
				as={FaArrowCircleRight}
				onClick={() => scrollNext()}
				fontSize='2xl'
				cursor='pointer'
			/>
		</Flex>
	);
};

interface AbstractProperty {
	data: {
		coverPhoto: any;
		price: number;
		rentFrequency: string;
		rooms: number;
		title: string;
		baths: number;
		area: number;
		agency: any;
		isVerified: string;
		externalID: number;
		map: (item: any) => any;
	};
}

const ImageScrollbar = ({ data }: AbstractProperty) => (
	<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
		{data.map((item: any) => (
			<Box width='910px' itemId={item.id} overflow='hidden' p='1' key={item.id}>
				<Image
					placeholder='blur'
					blurDataURL={item.url}
					src={item.url}
					width={1000}
					height={500}
					alt='property'
					sizes='(max-width:500px) 100px, (max-width):1024px 400px, 1000px'
				/>
			</Box>
		))}
	</ScrollMenu>
);

export default ImageScrollbar;
