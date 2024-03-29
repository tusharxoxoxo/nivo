import { useState, useEffect } from 'react';

import { getModels } from '../../api/getModels';

import { Container, Divider, Typography, Card } from "@mui/joy";
import { useNavigate } from 'react-router-dom';


const Inventory = () => {
  const [isData, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
          const fetchData = async () => {
          //replace this with api call (js fetch or axios)

          return await getModels()     }
          const execAll = async () => {
          const { data, loading } = await fetchData()
          setData(data)
          setLoading(loading)
          }
          execAll()
          //On Mount
          }, []) 
  const getItem = (name: String) => {
      navigate("/analysis/" + name)
  }

  if (isLoading) return ( 
          //Wait for data fetching
          <div>LOADING</div>
          )

      const cardSx = {
          "cursor": "pointer",
          "&:hover": {
              "border": "3px solid #002687 !important",
          }
  }

  const displayedData = Object.values(isData).map((item) => {
          const element = item as any
          return (
                  <Card key={element.model_name + "_key"} sx={cardSx} className="" onClick={() => getItem(element.model_name)}>
                  <div className="flex justify-between">
                  <div>{element.model_name}</div>
                  <div>{element.model_type}</div>
                  </div>
                  </Card>
    )
  })

  return (
          <Container>
          <div className="flex flex-col gap-5 pt-5">
          <Typography level="h1">Inventory</Typography>
          <Divider></Divider>
          <div className="flex flex-col w-auto gap-5">
          {displayedData}
          </div>
          </div>
          </Container>
  );
};

export default Inventory
