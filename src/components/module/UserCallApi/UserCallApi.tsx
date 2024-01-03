import { CSmartTable } from "@coreui/react-pro";
import { useEffect, useState } from "react";
import SearchComponent from "../../shared/SearchComponent/SearchComponent";
// import Calculator from "../Calculator/calculator";


const API: string = 'https://anfteco.vn/api/public/listings/secondary'

const UserCallApi = () =>{
    const [searchAgents, setSearchAgents] = useState<string>('')
    const [agents, setAgents] = useState<any>([])
    const agentsCallApi = () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(e => console.error(e))
        }
      useEffect(() => {
          agentsCallApi()
      },[])

    const findAgents = () =>{
        const arrUsers = agents.filter((ele:any) =>
        ( ele.name.toLowerCase().search(searchAgents.trim().toLowerCase()) !== -1) 
        )
        setAgents(arrUsers)
    }

    useEffect(() =>{
      findAgents()
    }, [searchAgents])

    const columns = [
        { key: 'id',  sorter: false, _style: { width: '20%' } },
        {
          key: 'name',
          _style: { width: '20%' },
          _props: { color: 'primary', className: 'fw-semibold' },
        },
        {
            key: 'location',
            _style: { width: '20%' },
            _props: { className: 'fw-semibold' },
          },
        {
            key: 'juridical',
            _style: { width: '20%' },
            _props: { color: 'primary', className: 'fw-semibold' },
          },
          {
            key: 'sourceOfCapital',
            _style: { width: '20%' },
            _props: { className: 'fw-semibold' },
          },
          {
            key: 'price',
            _style: { width: '20%' },
            _props: { color: 'primary', className: 'fw-semibold' },
          },
    ]

    return (
        <div className="UserCallApi d-flex justify-content-center flex-column align-items-center">
            <SearchComponent setUserSearch={setSearchAgents}/>
            <div className="UserCallApi-table">
                 <CSmartTable 
                columns={columns}
                items={agents.results}
                columnFilter
                columnSorter
                pagination
                tableProps={{
                hover: true,
                }}
                tableHeadProps={{
                    color: 'danger',
                  }}
                selectable
            />
            </div>
        </div>
    )
}

export default UserCallApi