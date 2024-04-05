import React from 'react';
import {Image} from 'react-native';

import styles from './InfoTicket.styles';
import {IMAGES} from '@constants/assets';
import {Text, View} from '@wrappers/index';

type Props = {
  title: number | string;
  content: string;
  size?: 'small' | 'medium';
  contentColor?: string;
  titleColor?: string;
  backgroundColor?: string;
};

const InfoTicket = ({
  title,
  content,
  size = 'medium',
  backgroundColor,
  titleColor,
  contentColor,
}: Props) => {
  return (
    <View style={styles.innerContainer}>
      <View>
        <Image
          source={IMAGES.avatar}
          style={size === 'small' ? styles.smallAvatar : styles.avatar}
        />
      </View>
      <View
        style={[
          styles.cardBodyContainer,
          {
            backgroundColor: backgroundColor ?? 'transparent',
          },
        ]}>
        <Text
          smallSize={size === 'small'}
          bold
          color={titleColor ?? '@primaryColor'}>
          {title}
        </Text>
        <Text
          mediumSize={size === 'small'}
          style={styles.cardTitle}
          color={contentColor ?? '@primaryColor'}>
          {content}
        </Text>
      </View>
    </View>
  );
};

export default InfoTicket;
