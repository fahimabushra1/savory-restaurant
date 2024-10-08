import {Helmet} from "react-helmet-async";

const HelmetTitle = ({title}) => {
    return (
      <>
       <Helmet>
        <title>savory restaurant | {title}</title>
       </Helmet>
      </>
    );
};

export default HelmetTitle;