import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/banner/manus-logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>manus</Text>
        </View>
        <Text style={styles.menu}>☰</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Leave it to Manus</Text>
        <Text style={styles.subtitle}>
          Manus is a general AI agent that bridges minds and actions: it doesn’t
          just think, it delivers results. Manus excels at various tasks in
          work and life, getting everything done while you rest.
        </Text>
        <Image
          source={require('../assets/banner/home.webp')}
          style={styles.video}
        />
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.tryBtn}>
            <Text style={styles.tryText}>Try Manus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.igBtn}>
            <Text style={styles.igText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Use Cases Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore use cases from our official collection</Text>
        <Text style={styles.sectionSubtitle}>
          Learn how Manus handles real-world through step by step replays
        </Text>

        <View style={styles.tags}>
          {['Featured', 'Research', 'Life', 'Data Analyst', 'Education'].map((tag, i) => (
            <Text key={i} style={styles.tag}>{tag}</Text>
          ))}
        </View>

        <View style={styles.cardWrap}>
          {useCases.map((item, index) => (
            <View style={styles.card} key={index}>
              <Image source={item.icon} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Events Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Events</Text>
        <Text style={styles.sectionSubtitle}>
          Join our community events to learn more about Manus AI and connect
          with other enthusiasts.
        </Text>
        {events.map((event, idx) => (
          <View key={idx} style={{ marginBottom: 15 }}>
            <Image source={event.image} style={{ width: '100%', height: 180, borderRadius: 10 }} />
            <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{event.title}</Text>
            <Text style={{ color: '#888', fontSize: 12 }}>{event.date}</Text>
          </View>
        ))}
      </View>

      {/* Footer Section */}
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {['Company', 'Resources', 'Community'].map((section, idx) => (
            <View key={idx} style={{ width: '30%', marginBottom: 15 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{section}</Text>
              {footerLinks.map((link, i) => (
                <Text key={i} style={{ fontSize: 12, marginBottom: 3 }}>{link}</Text>
              ))}
            </View>
          ))}
        </View>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image source={require('../assets/banner/manus-logo.png')} style={styles.logoImage} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 6 }}>manus</Text>
          </View>
          <Text style={{ fontSize: 10, color: '#888' }}>©2025 Manus AI</Text>
          <Text style={{ fontSize: 10, color: '#888' }}>Headquartered in Singapore</Text>
          <View style={styles.socialContainer}>
            <Image source={require('../assets/icons/brand-linkedin.png')} style={styles.socialIcon} />
            <Image source={require('../assets/icons/brand-instagram.png')} style={styles.socialIcon} />
            <Image source={require('../assets/icons/brand-x.png')} style={styles.socialIcon} />
            <Image source={require('../assets/icons/brand-tiktok.png')} style={styles.socialIcon} />
            <Image source={require('../assets/icons/brand-youtube.png')} style={styles.socialIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const useCases = [
  {
    icon: require('../assets/icons/book.png'),
    title: 'Explore use cases from our official collection',
    description: 'Manus integrates comprehensive travel information to create personalized itineraries and produces a custom travel handbook tailored specifically for your japanese adventure',
  },
  {
    icon: require('../assets/icons/settings.png'),
    title: 'Interactive course on the momentum theorem',
    description: 'Manus develops engaging video presentations for educators clearly explaining the momentum theorem through accesible and educational content.',
  },
  {
    icon: require('../assets/icons/chart-area-line.png'),
    title: 'Comparative analysis of insurance policies',
    description: 'Manus generates comparison tables highlighting key policy information with optimal recommendations tailored to your needs.',
  },
  {
    icon: require('../assets/icons/chart-pie.png'),
    title: 'B2B supplier sourcing',
    description: 'Manus conducts research to identify suitable suppliers for yours specific requirements. As your dedicated agent, Manus works exclusively in your best interest.', 
  },
];

const events = [
  {
    image: require('../assets/banner/blog-image-1.avif'),
    title: 'Vibe Coding For Startups With Manus',
    date: 'May 3 2025',
  },
  {
    image: require('../assets/banner/blog-image-2.avif'),
    title: 'Manus Meetup Melbourne',
    date: 'Apr 28 2025',
  },
  {
    image: require('../assets/banner/blog-image-3.avif'),
    title: 'Manus Meetup Sydney',
    date: 'Apr 29 2025',
  },
];

const footerLinks = ['About Us', 'Feedback', 'Media inquiries', 'Contact Us', 'Careers'];

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', paddingBottom: 30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
  logoImage: { width: 30, height: 30, marginRight: 8 },
  logoText: { fontSize: 20, fontWeight: 'bold' },
  menu: { fontSize: 24 },
  section: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, textAlign: 'center', marginTop: 10, color: '#555' },
  video: { width: '100%', height: 200, marginTop: 20, borderRadius: 10 },
  buttonGroup: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  tryBtn: { backgroundColor: '#000', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginRight: 10 },
  tryText: { color: '#fff' },
  igBtn: { backgroundColor: '#eee', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  igText: { color: '#000' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  sectionSubtitle: { fontSize: 13, textAlign: 'center', color: '#777', marginBottom: 15 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 10 },
  tag: { backgroundColor: '#f0f0f0', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, fontSize: 12, margin: 4 },
  cardWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e0e0e0', padding: 15, borderRadius: 10, width: '48%', marginBottom: 10 },
  cardIcon: { width: 30, height: 30, marginBottom: 10 },
  cardTitle: { fontWeight: 'bold', fontSize: 14, marginBottom: 6 },
  cardText: { fontSize: 12, color: '#555' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  socialIcon: { width: 30, height: 30, marginHorizontal: 5 },
});
