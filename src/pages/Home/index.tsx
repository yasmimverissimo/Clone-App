import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from './style';

const SERVICES = [
  { label: 'Valida\nMais', icon: 'cellphone-nfc' },
  { label: 'Cartão\nDigital', icon: 'qrcode-scan' },
  { label: 'Clube\nRiocard ...', icon: 'star-circle' },
  { label: 'Fazer\nrecarga', icon: 'cash-plus' },
  { label: 'Meus\ncartões', icon: 'credit-card-multiple' },
  { label: 'Meus\npedidos', icon: 'file-document-edit-outline' },
];

export default function Home() {
  const [showSaldo, setShowSaldo] = useState(false);
  const navigation = useNavigation<any>(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.headerTopNav}>
        
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('LoginCPF')} 
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image 
             source={require('../../assets/logo rio card mais.png')}  
            style={styles.logoImage} 
          />
        </View>

        <View style={{ width: 24, marginRight: 16 }} />
      </View>


      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.bannerSpacer} />


        <View style={styles.card}>
          <View style={styles.cardTopSection}>
            <Text style={styles.cardTitle}>Saldo Expresso</Text>
            <View style={styles.saldoRow}>
              <Text style={styles.saldo}>
                {showSaldo ? 'R$ 15,50' : 'R$  • • • • •'}
              </Text>
              <TouchableOpacity onPress={() => setShowSaldo(!showSaldo)}>
                <Ionicons
                  name={showSaldo ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color="#FFF"
                />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.miniButton}>
              <Text style={styles.miniButtonText}>Fazer recarga</Text>
              <MaterialCommunityIcons name="currency-usd" size={16} color="#FFF" style={{ marginLeft: 6 }} />
            </TouchableOpacity>

            <View style={styles.miniButtonDivider} />

            <TouchableOpacity style={styles.miniButton}>
              <Text style={styles.miniButtonText}>Ver detalhes</Text>
              <Ionicons name="chevron-forward" size={16} color="#FFF" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Serviços</Text>
        <Text style={styles.sectionSubtitle}>
          Clique abaixo no serviço que deseja utilizar
        </Text>


        <View style={styles.grid}>
          {SERVICES.map((item, index) => (
            <TouchableOpacity key={index} style={styles.gridItem} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={28}
                  color="#0076DF"
                />
              </View>
              <Text style={styles.gridText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.helpCard} activeOpacity={0.8}>
          <Text style={styles.helpText}>Precisa de ajuda?</Text>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={20} color="#777" />
            </View>
            <View style={styles.whatsappBadge}>
              <Ionicons name="logo-whatsapp" size={11} color="#FFF" />
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>


      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={22} color="#0084EC" />
          <Text style={styles.tabLabelActive}>Início</Text>
          <View style={styles.tabActiveIndicator} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="credit-card-outline" size={22} color="#7F8C8D" />
          <Text style={styles.tabLabel}>Meus{"\n"}cartões</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabCenterCircle}>
            <MaterialCommunityIcons name="arrow-up-bold-circle-outline" size={24} color="#7F8C8D" />
          </View>
          <Text style={styles.tabLabel}>Recarga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="star-outline" size={22} color="#7F8C8D" />
          <Text style={styles.tabLabel}>Clube</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="menu" size={22} color="#7F8C8D" />
          <Text style={styles.tabLabel}>Serviços</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}