import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import AddScreen from './add'
import GroceriesScreen from './groceries'
import HomeScreen from './home'
import MealPlanScreen from './mealplan'
import MyRecipesScreen from './myrecipes'

const Tab = createBottomTabNavigator()

export default function _layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#E6F2E2',
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons name="home-outline" size={28} color={focused ? "#217A2C" : "#7CB47C"} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRecipes"
        component={MyRecipesScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <MaterialIcons name="menu-book" size={28} color={focused ? "#217A2C" : "#7CB47C"} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#217A2C',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                borderWidth: 4,
                borderColor: '#E6F2E2',
              }}
            >
              <Ionicons name="add" size={36} color="#fff" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MealPlan"
        component={MealPlanScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <FontAwesome5 name="calendar-alt" size={26} color={focused ? "#217A2C" : "#7CB47C"} />
          ),
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={GroceriesScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons name="cart-outline" size={28} color={focused ? "#217A2C" : "#7CB47C"} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}