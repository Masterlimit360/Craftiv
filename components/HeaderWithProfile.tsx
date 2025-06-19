import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import { Animated, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SIDEBAR_WIDTH = 270

export default function HeaderWithProfile({ title }: { title: string }) {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current
  const router = useRouter()

  const openSidebar = () => {
    setSidebarVisible(true)
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const closeSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSidebarVisible(false))
  }

  return (
    <>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/217A2C/chef-hat.png' }}
          style={styles.chefIcon}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={openSidebar}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={sidebarVisible}
        animationType="none"
        onRequestClose={closeSidebar}
      >
        <Pressable style={styles.overlay} onPress={closeSidebar}>
          <Animated.View
            style={[
              styles.sidebar,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <View style={styles.sidebarHeader}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                style={styles.sidebarProfile}
              />
              <View>
                <Text style={styles.sidebarName}>martinafful2304992</Text>
                <TouchableOpacity onPress={() => {
                  closeSidebar()
                  router.push('/edit-profile')
                }}>
                  <Text style={styles.sidebarEdit}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <SidebarOption label="Upgrade to MixIt Plus" />
              <SidebarOption label="Add the MixIt Shortcut" />
              <SidebarOption label="Read our import guides" />
              <SidebarOption label="Use MixIt on Desktop" />
              <SidebarOption label="Invite Friends" />
              <SidebarOption label="help" />
              <SidebarOption
                label="Settings"
                onPress={() => {
                  closeSidebar()
                  router.push('/settings')
                }}
              />
            </ScrollView>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  )
}

function SidebarOption({ label, onPress }: { label: string, onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.sidebarOption} onPress={onPress}>
      <View style={styles.sidebarOptionLeft}>
        <Image
          source={{ uri: 'https://img.icons8.com/fluency/48/star.png' }}
          style={styles.sidebarIcon}
        />
        <Text style={styles.sidebarOptionText}>{label}</Text>
      </View>
      <Text style={styles.sidebarArrow}>{'>'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#E6F2E2',
  },
  chefIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#217A2C',
    flex: 1,
    marginLeft: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sidebarProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  sidebarName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  sidebarEdit: {
    color: '#888',
    fontSize: 13,
    marginTop: 2,
  },
  sidebarOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F2E2',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  sidebarOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  sidebarOptionText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
  sidebarArrow: {
    fontSize: 20,
    color: '#888',
    fontWeight: 'bold',
  },
})