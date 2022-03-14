// @ts-nocheck
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Realtor</title>
		</Head>
		<Box maxWidth='1280px' m='auto'>
			<header>
				<NavBar />
			</header>
			<main>{children}</main>
		</Box>
		<footer>
			<Footer />
		</footer>
	</>
);

export default Layout;
