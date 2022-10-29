import { React } from 'react';
import { Col, Row } from 'react-bootstrap';

import Content from '../Content/Content';

/* eslint-disable */
/*
The essential format we are trying to replicate is as follows


Diameter: 6"				Fuel: Hydroxyl-Terminated Polybutadiene
Length: 217"				Oxidizer: Nitrous Oxide

Motor Classification: O 	Drogue Chute Diameter: 55"
Wet Mass: 171 lbs			Main Chute Diameter: 149.5"

							Apogee: 15,586 ft AGL

The first abstraction is dividing things into columns.

As a result, our 'specs' object is of the form
[column0, column1, ...]

No we analyze an individual column

Diameter: 6"
Length: 217"

Motor Classification: O
Wet Mass: 171 lbs

this is broken into two groups. Therefore, 
each column is sub divided into
[group0, group1, ...]

Then each group is a simple map between textual keys
and values. 

In summary

specs = [column...]
column = [group...]
group = map{string: string, ...}
*/
/* eslint-enable */

const SpecsComponent = ({ specs }) => {
  const specElems = specs.map((col, colInd) => {
    const colElems = col.map((group, groupInd) => {
      const groupElems = [];

      Object.keys(group).forEach((key) => {
        groupElems.push(
          `${key}: ${group[key]}\n`,
        );
      });

      const finalString = groupElems.reduce((a, b) => a + b, '');

      return (
        <p key={`${groupInd.toString()} ${colInd.toString()} group`}>{finalString}</p>
      );
    });

    return (
      <Col key={`${colInd.toString()} col`}>{colElems}</Col>
    );
  });
  return (
    <Content title="Specs">
      <Row>
        {specElems}
      </Row>
    </Content>
  );
};

export default SpecsComponent;
