import Data from './Data';
import classes from './DataList.module.css';


const DataList = (props: { demoData: { name: any; children: any; title: any;}[]; }) => {
  return (
    <ul className={classes['data-list']}>
      {props.demoData.map((demoD: { name: any; children: any; }) => (
        <Data
          key={demoD.name}
          title={demoD.children} 
          name={undefined} 
          children={undefined} />
      ))}
    </ul>
  );
};

export default DataList;
