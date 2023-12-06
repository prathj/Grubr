import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FiltersScreen = ({ navigation }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const renderFilterBox = (filter, category) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterBox,
        selectedFilters.includes(filter) && styles.selectedFilterBox,
      ]}
      onPress={() => toggleFilter(filter)}
    >
      <Text>{filter}</Text>
    </TouchableOpacity>
  );

  const applyFilters = () => {
    console.log("Selected Filters:", selectedFilters);
    navigation.navigate("Home", { filters: selectedFilters });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Options</Text>

      {/* Dietary Preferences */}
      <Text style={styles.subheader}>Dietary Preferences</Text>
      <View style={styles.filterContainer}>
        {renderFilterBox("Vegetarian", "dietary")}
        {renderFilterBox("Halal", "dietary")}
        {renderFilterBox("Kosher", "dietary")}
        {renderFilterBox("Vegan", "dietary")}
        {renderFilterBox("Non-dairy", "dietary")}
        {renderFilterBox("High-protein", "dietary")}
        {renderFilterBox("Low-carb", "dietary")}
      </View>

      {/* Preparation Category */}
      <Text style={styles.subheader}>Preparation Category</Text>
      <View style={styles.filterContainer}>
        {renderFilterBox("< 1 hour", "preparation")}
        {renderFilterBox("< 30 min", "preparation")}
        {renderFilterBox("Budget-friendly", "preparation")}
      </View>

      {/* Cuisine */}
      <Text style={styles.subheader}>Cuisine</Text>
      <View style={styles.filterContainer}>
        {renderFilterBox("Chinese", "cuisine")}
        {renderFilterBox("Mexican", "cuisine")}
        {renderFilterBox("Mediterranean", "cuisine")}
        {renderFilterBox("Korean", "cuisine")}
        {renderFilterBox("Thai", "cuisine")}
        {renderFilterBox("Indian", "cuisine")}
        {renderFilterBox("Italian", "cuisine")}
        {renderFilterBox("Indonesian", "cuisine")}
        {renderFilterBox("American", "cuisine")}
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  filterBox: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  selectedFilterBox: {
    backgroundColor: "#8FEE8F", // Light green shade for selected filter
  },
  applyButton: {
    backgroundColor: "#3498db", // Blue color for the button
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default FiltersScreen;