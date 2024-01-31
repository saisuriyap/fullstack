import Donut from '../components/chart';
import CustomNavBar from '../components/nvbar';
import Sidebar from '../components/sidebar';
import CustomTable from '../components/table';

const dashboard = () => {
    return (
        <div>
            <div>
                <CustomNavBar/>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{display:'block',width:'20%'}}>
                <Sidebar/>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10%',}}>
                <Donut/>
                </div>
           <div>
           </div>
            </div>
        </div>
    );
};

export default dashboard;