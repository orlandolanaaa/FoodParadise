import React,{Component,Fragment} from 'react';
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import axios from 'axios';
class Home extends Component {
    
    constructor(){
        super();
        this.state = {
          keyword : "",
          featuredCities : null
        };
    
    }
    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
    
    };
    
    getFeaturedCities = () =>{
        var url = "https://developers.zomato.com/api/v2.1/cities"
      
        axios.get(url,{
            headers:{
               'user-key': '1257b864a4c01149507f400ee61cab44' 
            },
            params:{
                city_ids:"74,11052,170"
            }
        }).then(({data})=>{
            if(data.status ==="success"){
                this.setState({featuredCities:data.location_suggestions})
            }
        }).catch(err =>console.log(err));
    };

    componentDidMount(){
        this.getFeaturedCities();
    }
    render(){
        const citiesDummy=[
            {id:72, name: "Jakarta",country_name:"Indonesia"},
            {id:11052, name: "Bandung",country_name:"Indonesia"},
            {id:170, name: "Bali",country_name:"Indonesia"}
          ]
        return(
            <Fragment>
                <ImageAndWelcome/>
            
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                    <CityList cities = {this.state.featuredCities} title = {"Featured Cities"}/>
                    
                    <SearchCity value = {this.state.keyword} onChange={this.changeKeywordHandler}/>
                    <CityList cities = {citiesDummy} title = {"Search Result"}/>
                    
        
                
                </div>
            </Fragment>
        )
    }   
}

export default Home;