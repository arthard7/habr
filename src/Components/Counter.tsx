import React, {useEffect, useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {




    const alphabet = 'йцукенгшщфывапролдячсмитьбюзжASDFASDEGTAW4TSDFBHDSFGH'

    const randomSrt = () => {
        let res = ''


        while (res.length < 15){
            res += alphabet[Math.floor(Math.random() * alphabet.length - 1)]
        }

        return res

    }

    console.log(randomSrt())

    return (
        <div className={styles.btn}>
asdasd
        </div>
    );
};

export default Counter;