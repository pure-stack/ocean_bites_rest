import { useTranslation } from 'react-i18next';
import { StyleSheet, Text as TextRN } from 'react-native';

interface ITextProps {
    text: string;
    textColor?: string;
    type?: string
    styles?: any;
    numberOfLines?: number;
}

const Text = (props: ITextProps) => {
    const {text, textColor, type = 'default', styles, numberOfLines = 1} = props

    const color = textColor ? textColor : '#ffffff'

    const { t } = useTranslation()

    return (
      <TextRN numberOfLines={numberOfLines} ellipsizeMode={'tail'} style={[
          {color},
          type === 'default' ? css.default : undefined,
          type === 'title' ? css.title : undefined,
          type === 'title2' ? css.title2 : undefined,
          type === 'regular' ? css.regular : undefined,
          type === 'semibold' ? css.semibold : undefined,
          type === 'bold' ? css.bold : undefined,
          type === 'h3' ? css.h3 : undefined,
          type === 'subtitle' ? css.subtitle : undefined,
          styles
      ]}>{t(text)}</TextRN>
    )
}

export default Text

const css = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    title2: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    regular: {
        fontSize: 16,
        fontWeight: 'regular'
    },
    semibold: {
        fontSize: 17,
        fontWeight: 'semibold'
    },
    bold: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 24,
        fontWeight: 500
    },
    subtitle: {
        fontWeight: 400,
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.43
    }
})
