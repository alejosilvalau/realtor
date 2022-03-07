import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Banner = ({
	purpose,
	title1,
	title2,
	desc1,
	desc2,
	buttonText,
	linkName,
	imageUrl,
}: any) => {
	return (
		<Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
			<Image src={imageUrl} width={500} height={300} alt='banner' />
			<Box p={5}>
				<Text color='gray.500' fontSize='sm' fontWeight='medium'>
					{purpose}
				</Text>
				<Text fontSize='3xl' fontWeight='bold'>
					{title1}
					<br />
					{title2}
				</Text>
				<Text fontSize='1g' paddingTop='3' paddingBottom='3' color='gray.700'>
					{desc1}
					<br />
					{desc2}
				</Text>
				<Button fontSize='xl'>
					<Link href={linkName}>{buttonText}</Link>
				</Button>
			</Box>
		</Flex>
	);
};

export default Banner;
