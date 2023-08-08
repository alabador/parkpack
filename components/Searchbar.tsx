"use client";

import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Searchbar() {
  const [formData, setFormData] = useState({
    state: "",
    park: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: FormEvent) {
    // e.preventDefault();
    console.log(formData.state, formData.park);
  }
  return (
    <div className="p-8 xl:px-24 pb-0">
      <form onSubmit={handleSubmit} action={`/parks`} method="get">
        <FormControl
          className="
            p-8 rounded-md relative bottom-24 bg-white flex gap-4 flex-col md:flex-row
        "
        >
          <Select size={"lg"} onChange={handleSelectChange} name="state">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Select>
          <Input
            placeholder="Search for national park"
            size={"lg"}
            onChange={handleInputChange}
            name="park"
          />
          <Button
            size={"lg"}
            className="px-8 py-4 bg-green-800 text-white"
            type="submit"
          >
            Search
          </Button>
        </FormControl>
      </form>
      <p>{formData.state}</p>
      <p>{formData.park}</p>
    </div>
  );
}
