import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useAuthDispatch } from '../contexts/authContext';
import { signOut } from '../services/authService';
import mapStyles from '../helpers/mapStyles';

const HomeScreen = () => {
  const dispatch = useAuthDispatch();
  const mapRef = useRef(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
  const [locationResult, setLocationResult] = useState(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        setLocationResult('Permission to access location was denied');
      } else {
        setHasLocationPermissions(true);
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocationResult(JSON.stringify(location));
      console.log('location: ', locationResult);

      // Center the map on the location we just fetched.
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0
      });
    };
    getLocationAsync();
  }, [locationResult]);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: 'SIGN_OUT' });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View styles={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsCompass={false}
        style={styles.map}
        customMapStyle={mapStyles}
        initialRegion={mapRegion}
        showsMyLocationButton
        showsPointsOfInterest
        showsBuildings
        showsUserLocation
        followsUserLocation
      />
      <View style={{ position: 'absolute', margin: 32 }}>
        <Button title="Log Out" onPress={handleSignOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    ...StyleSheet.absoluteFill
  }
});

export default HomeScreen;
