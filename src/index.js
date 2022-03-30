import ReactDOM from "react-dom";
import * as React from "react";
import { Component } from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";
import data from "./contacts.json";
import { Table, Thead, Tbody, Heading, HStack, Button, Image, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

// const dataClone = [...data];

const filteredList = data.splice(0, 5);

// const result = console.log(data.length, dataClone.length)
// const result = data.filter( (item) => {
//   // console.log(item.id)
//   filteredList.forEach(filteredItem => {
//     return console.log(filteredItem.id, 'is being compared with', item.id, '. Do they match?', filteredItem.id == item.id)
//   })
// })
// const remainingContacts = data.filter( (item, index) => filteredList[item] !== -1)

// const result = data.filter((ad) =>
//   filteredList.some((fd) => {
//     console.log(fd.id, ad.id)
//     // return fd.id !== ad.id;
//   })
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: filteredList,
    };
  }

  addRandomContact() {
    const contactsCopy = [...this.state.contacts]; // <== notice the spread operator here!
    const index = (Math.floor(Math.random() * data.length));
    contactsCopy.push(data[index])
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    console.log(this.state.contacts.length)
    return (
      <ChakraProvider>
        <Center>
          <Heading padding={4} size="4xl">
            Labs with Chakra
          </Heading>
        </Center>
        <Center>
          <Heading as="h2" size="2xl" padding={10}>
            IronContacts
          </Heading>
        </Center>
        <TableContainer>
          <Center>
            <HStack spacing={8}>
              <Button onClick={this.addRandomContact.bind(this)} colorScheme="teal" variant="outline">
                Add Random Contact
              </Button>
              <Button colorScheme="teal" variant="outline">
                Sort By Name
              </Button>
              <Button colorScheme="teal" variant="outline">
                Sort By Popularity
              </Button>
            </HStack>
          </Center>
          <br />
          <br />
          <Table m="auto" width="40%" variant="simple">
            <Thead>
              <Tr>
                <Th>Picture</Th>
                <Th>Name</Th>
                <Th>Popularity</Th>
                <Th>Won Oscar</Th>
                <Th>Won Emmy</Th>
              </Tr>
            </Thead>
            <Tbody>
              {this.state.contacts.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Image borderRadius="full" objectFit="cover" boxSize="80px" src={item.pictureUrl} alt="Dan Abramov" />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.popularity}</Td>
                  <Td>{item.wonOscar ? "🏆" : ""}</Td>
                  <Td>{item.wonEmmy ? "🏆" : ""}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
