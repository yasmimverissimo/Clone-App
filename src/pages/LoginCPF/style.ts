import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0084EC', 
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 40, 
    height: 90, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    logoImage: {
    width: 380,           
    height: 127,           
    resizeMode: 'contain',
    marginLeft: -40,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40, 
  },
  // ── ADICIONADO: Restaurado o estilo que estava faltando e causando erro ──
  subheading: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 35,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    marginBottom: 25,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },
  input: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 4,
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#43505C', 
    borderRadius: 6,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: '#E1E6EB',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  backButton: {
    padding: 10,     
    marginLeft: 10, 
  },
});