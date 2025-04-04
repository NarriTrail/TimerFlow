import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const History = () => {
    const route:any = useRoute()
    const navigation = useNavigation()
    console.log(JSON.stringify(route.params))

    const handleNavigation = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={handleNavigation}
                    hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }} >

                    <AntDesign name='arrowleft' size={24} color={'#fff'} />
                </TouchableOpacity>
                <Text style={styles.appTitle}>History</Text>


            </View>
            <FlatList
                data={route.params}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: '#fff', paddingHorizontal: 4, borderRadius: 7, marginBottom: 8, paddingVertical: 10 }}>
                            <Text style={styles.categoryHeader}>{item.category}</Text>
                            <Text style={styles.statusText}>completed tasks</Text>
                            {
                                item?.timers?.map((each:{name:string}, index: number) => {
                                    return (
                                        <View key={index}>
                                            <Text>--{each?.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                }}
                style={{ marginTop: 10 }}
                ListEmptyComponent={()=>{
                    return(
                        <View style={styles.emptyList}>
                            <Text style={styles.noTimersText}>No Tasks Completed</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#9bdbeb' },
    appTitle: { fontWeight: 'bold', fontSize: 22, color: '#fff' },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        width: "60%",
        justifyContent: 'space-between'
    },
    categoryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'capitalize',
        color: '#aaa',
        textDecorationLine: 'underline'
    },
    statusText: { fontSize: 14, color: 'gray', fontWeight: '500' },
    emptyList:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        // borderWidth:1,
        alignSelf:"center",
        marginTop:50
    },
    noTimersText: {textAlign: 'center', fontSize: 18, marginTop: 20,color:'#000'},

})