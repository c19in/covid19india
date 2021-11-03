// import {AlertIcon} from '@primer/octicons-react';
// import {useTranslation} from 'react-i18next';

function Banner(props) {
  // const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        The covid19india.org frontend using data from data.incovid19.org.
        Details&nbsp; <a href="https://c19in.github.io">here</a>.
      </div>
    </div>
  );
}

export default Banner;
