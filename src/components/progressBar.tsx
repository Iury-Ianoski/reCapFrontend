import { StyleSheet, Text, View } from 'react-native';

type Props = {
  percentual: number
}

export function ProgressBar({ percentual }: Props) {
  return (
    <View style={styles.base}>
      <View style={styles.background}>
        <View
          style={[
            styles.progress,
            { width: `${percentual}%` }
          ]}
        />
      </View>
      <Text style={{ color: '#4B4B4B', fontSize: 10, fontWeight: 600 }}>{percentual}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  background: {
    flex: 1,
    height: 10,
    backgroundColor: "#E8E8E8",
    borderRadius: 2,
    overflow: "hidden"
  },
  progress: {
    height: "100%",
    backgroundColor: "#00277B",
    borderRadius: 2
  }
})