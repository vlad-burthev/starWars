import { Container } from "@/components/UI/Container/Containers";
import styles from "./SearchPage.module.scss";
import { useEffect, useState } from "react";
import { getApiResource } from "@/utils/network";
import { withErrorApi } from "@/hoc/withErrorApi";
import { API_API_SEARCH } from "@/constants/api";
import { getPeopleId, getPeopleImage } from "@/services/getPeopleData";

import { debounce } from "lodash";
import SearchPageInfo from "@/components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "@/components/UI/UiInput/UiInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);
  const getRespose = async (params) => {
    const res = await getApiResource(API_API_SEARCH + params);

    if (res && res.results) {
      const peopleList = res.results.map((item) => {
        const id = getPeopleId(item.url);
        const img = getPeopleImage(id);
        return {
          id,
          name: item.name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getRespose("");
  }, []);

  const debounceGetResopnse = debounce((value) => getRespose(value), 300);

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debounceGetResopnse(value);
  };

  return (
    <Container>
      <UiInput
        type="text"
        value={inputSearchValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Input characters`s name"
        onClick={() => setInputSearchValue("")}
        maxLength="30"
      />
      <SearchPageInfo people={people} />
    </Container>
  );
};

export default withErrorApi(SearchPage);
