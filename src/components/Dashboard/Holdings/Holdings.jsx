import React, { useState, useEffect } from "react";
import {
	Box,
	Flex,
	Text,
	Divider,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import { getHoldings } from "../../../services/TradeServices";
const Holdings = () => {
	const [holdings, setHoldings] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const getUserHoldings = () => {
		getHoldings()
			.then((data) => {
				setHoldings(data);
			})
			.catch((error) => {
				if (error.status === 400) {
					setErrorMessage("Invalid Credentials");
				} else {
					setErrorMessage(
						error.message || "An unexpected error occurred."
					);
					console.log(errorMessage);
				}
			});
	};
	useEffect(() => {
		getUserHoldings();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Box
			mb={5}
			width={{
				base: "100%",
				sm: "100%",
				md: "100%",
				lg: "45%",
				xl: "45%",
			}}
			
			boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
			borderColor={"dashboardPrimary"}
			borderWidth={"2px"}
			borderRadius={"10px"}
		>
			{" "}
			<Flex>
				<Box width={"50%"}>
					<Text
						m={0}
						width={"100%"}
						height={"100%"}
						pl={"3"}
						pt={2}
						pb={1}
						fontWeight={"bold"}
						fontSize={"18px"}
					>
						{" "}
						Holdings
					</Text>
				</Box>
			</Flex>
			<Divider p={0} m={0} />
			<Box
				pl={4}
				bg="white"
				w="100%"
				h="240px"
				overflowY="auto"
				borderRadius={"10px"}
				boxShadow={
					"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
				}
				border={"2x"}
				borderColor={"#F1D7D7"}
			>
				<Table
					mt={5}
					sx={{ "tbody tr:nth-of-type(odd)": { bg: "accentColor" } }}
				>
					<Thead position="sticky" top={0} zIndex={1}>
						<Tr>
							<Th p={0} textAlign={"center"} pb={2}>
								Symbol
							</Th>

							<Th p={0} textAlign={"center"} pb={2}>
								Quantity
							</Th>
							<Th p={0} textAlign={"center"} pb={2}>
								value
							</Th>
							<Th p={0} textAlign={"center"} pb={2}>
								percentage
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{holdings.map((o, index) => (
							<Tr key={index}>
								<Td p={1} textAlign={"center"} color={"blue"}>
									{o.stockSymbol}
								</Td>

								<Td p={1} textAlign={"center"}>
									{o.quantity}
								</Td>
								<Td p={1} textAlign={"center"}>
									${o.value.toFixed(2)}
								</Td>
								<Td p={1} textAlign={"center"}>
									{o.percentage} %
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
};
export default Holdings;