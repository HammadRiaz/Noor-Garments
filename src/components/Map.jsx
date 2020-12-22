import React from 'react';

const Map=()=>{
    return(
    <div>
      <h1 className='text-primary Reach'>REACH<br></br> US</h1>
      <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301.0598258935155!2d74.
      3696684567332!3d31.383720289695436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a828bce0350d%3A0xd0d4bb068d583a15!2zMzHCsDIzJzAxL
      jMiTiA3NMKwMjInMTAuNyJF!5e0!3m2!1sen!2s!4v1606299728336!5m2!1sen!2s" className='overflow-hidden mt-3 mb-3 Map rounded border border-info shadow-lg'
      style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} width={600} height={450} frameBorder={0} />
    </div>);
}

export default Map;