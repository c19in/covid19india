// import {AlertIcon} from '@primer/octicons-react';
// import {useTranslation} from 'react-i18next';

function Banner(props) {
  // const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        The&nbsp; <a href="https://covid19india.org">covid19india.org</a> frontend
        using data from &nbsp; <a href="https://data.covid19india.org" 
        >data.covid19india.org</a> (till 31 October). Details&nbsp; 
        <a href="https://c19in.github.io">here</a>.
      </div>
    </div>
  );
}

export default Banner;
