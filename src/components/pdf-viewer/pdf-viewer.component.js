import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';

import styles from './pdf-viewer.style';

const PdfViewer = ({source}) => {
  return (
    <View style={styles.container}>
      <Pdf
        fitWidth={true}
        source={source}
        // onLoadComplete={(numberOfPages, filePath)=>{
        //   console.log(`path : ${filePath} number of pages: ${numberOfPages}`)
        // }}
        // onPageChanged={(page, numberOfPages)=>{
        //   console.log(`current page: ${page} of ${numberOfPages}`)
        // }}
        // onError={(error)=>{
        //   console.log(error)
        // }}
        style={styles.pdf}
      />
    </View>
  );
};

PdfViewer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  source: PropTypes.object,
};

export default PdfViewer;
