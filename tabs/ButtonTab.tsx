import {
  TextTypes,
  Button,
  ButtonSizes,
  ButtonThemes,
  Spacer,
  Spacing,
  Color,
  IconButton,
  IconButtonSizes,
} from 'welab-rn-ui'
import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {ScrollView} from 'react-native'

export default function ButtonTab(): JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
      }}>
      {/* Primary */}
      <Button text="Primary" />
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <Button text="ON" size={ButtonSizes.Small} icon="bank_" />
        <Spacer x={Spacing.m} />
        <Button text="ON" onPress={() => console.log('enabled')} icon="bank" />
        <Spacer x={Spacing.m} />
        <Button
          text="OFF"
          disabled
          onPress={() => console.log('disabled')}
          icon="bank"
        />
      </View>
      {/* Secondary */}
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <Button
          text="Secondary"
          theme={ButtonThemes.Secondary}
          size={ButtonSizes.Small}
        />
        <Spacer x={Spacing.m} />
        <Button text="Secondary" theme={ButtonThemes.Secondary} />
        <Spacer x={Spacing.m} />
        <Button text="Disabled" theme={ButtonThemes.Secondary} disabled />
      </View>
      {/* Tertiary */}
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <Button
          text="Tertiary"
          theme={ButtonThemes.Tertiary}
          size={ButtonSizes.Small}
        />
        <Spacer x={Spacing.m} />
        <Button text="Tertiary" theme={ButtonThemes.Tertiary} />
        <Spacer x={Spacing.m} />
        <Button text="Disabled" theme={ButtonThemes.Tertiary} disabled />
      </View>
      {/* TopNav */}
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <Button
          text="TopNav"
          theme={ButtonThemes.TopNav}
          size={ButtonSizes.Small}
        />
        <Spacer x={Spacing.m} />
        <Button text="TopNav" theme={ButtonThemes.TopNav} />
        <Spacer x={Spacing.m} />
        <Button text="Disabled" theme={ButtonThemes.TopNav} disabled />
      </View>
      {/* Custom */}
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <Button
          text="Custom"
          size={{
            textType: TextTypes.Header1,
            height: 50,
            paddingHorizontal: 50,
          }}
          theme={{
            textColor: Color.Alto,
            buttonStyle: {
              backgroundColor: Color.Blue,
              borderRadius: 10,
            },
          }}
        />
      </View>
      {/* IconButton */}
      <Spacer y={Spacing.m} />
      <View style={styles.row}>
        <IconButton icon="bank" disabled />
        <IconButton
          icon="bank"
          padding={Spacing.s}
          style={{backgroundColor: Color.CloudyBlue}}
        />
        <IconButton
          icon="bank"
          color={Color.Red}
          size={IconButtonSizes.Small}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
