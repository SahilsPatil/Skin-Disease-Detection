import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_900Black,
  } from '@expo-google-fonts/poppins';

const DetectedDiseaseScreen = ({ navigation, route }) => {

    const { id, imageData } = route.params;
    console.log(imageData)
    const skinDiseases = [
        {
            "id": 1,
            "image":require("../assets/diseases/BA-cellulitis.jpg"),
            "diseaseName": "Cellulitis",
            "description": "Cellulitis is a common bacterial skin infection characterized by redness, swelling, and warmth in the affected area. It is usually caused by bacteria entering the skin through a cut or wound.",
            "treatment": "Treatment for cellulitis typically involves antibiotics to kill the bacteria causing the infection. In severe cases, hospitalization and intravenous antibiotics may be necessary."
        },
        {
            "id": 2,
            "image":require("../assets/diseases/15_BA-impetigo.jpg"),
            "diseaseName": "Impetigo",
            "description": "Impetigo is a highly contagious bacterial skin infection that commonly affects children. It is characterized by red sores or blisters that rupture and form a yellowish crust. Impetigo is usually caused by Staphylococcus aureus or Streptococcus pyogenes bacteria.",
            "treatment": "Treatment for impetigo often involves topical antibiotics, such as mupirocin or fusidic acid, applied directly to the affected area. In some cases, oral antibiotics may be prescribed."
        },
        {
            "id": 3,
            "image":require("../assets/diseases/FU-athlete-foot.png"),
            "diseaseName": "Athlete's Foot",
            "description": "Athlete's foot, also known as tinea pedis, is a fungal infection of the skin on the feet. It is characterized by itching, burning, and cracked, peeling skin, particularly between the toes.",
            "treatment": "Treatment for athlete's foot typically involves antifungal medications, such as topical creams or sprays. Good foot hygiene, including keeping the feet clean and dry, is also important."
        },
        {
            "id": 4,
            "image":require("../assets/diseases/_10_784.jpg"),
            "diseaseName": "Nail Fungus",
            "description": "Nail fungus, or onychomycosis, is a fungal infection of the nails. It can cause the nails to become thickened, discolored, and brittle. Nail fungus is often caused by dermatophyte fungi.",
            "treatment": "Treatment for nail fungus may include topical antifungal medications, oral antifungal medications, or in some cases, surgical removal of the affected nail."
        },
        {
            "id": 5,
            "image":require("../assets/diseases/13_FU-ringworm (9).jpeg"),
            "diseaseName": "Ringworm",
            "description": "Ringworm, also known as dermatophytosis, is a fungal infection of the skin or scalp. It is characterized by red, circular, scaly patches that may itch or burn. Despite its name, ringworm is not caused by a worm but by various fungi.",
            "treatment": "Treatment for ringworm typically involves antifungal medications, such as topical creams or oral medications. Good hygiene practices, including keeping the affected area clean and dry, can help prevent the spread of ringworm."
        },
        {
            "id": 6,
            "image":require("../assets/diseases/1_PA-cutaneous-larva-migrans (4).jpg"),
            "diseaseName": "Cutaneous Larva Migrans",
            "description": "Cutaneous larva migrans is a skin condition caused by hookworm larvae migrating through the skin. It is commonly acquired by walking barefoot on contaminated soil or sand. Cutaneous larva migrans is characterized by an itchy, winding rash that may resemble tracks under the skin.",
            "treatment": "Treatment for cutaneous larva migrans usually involves topical or oral antiparasitic medications, such as albendazole or ivermectin, to kill the larvae."
        },
        {
            "id": 7,
            "image":require("../assets/diseases/34_VI-chickenpox (15).jpg"),
            "diseaseName": "Chickenpox",
            "description": "Chickenpox, also known as varicella, is a highly contagious viral infection characterized by an itchy rash of red spots and blisters. It is caused by the varicella-zoster virus and is most common in children.",
            "treatment": "Treatment for chickenpox typically involves relieving symptoms, such as fever and itching, with over-the-counter medications. Vaccination is the best way to prevent chickenpox."
        },
        {
            "id": 8,
            "image":require("../assets/diseases/2_VI-shingles (17).jpg"),
            "diseaseName": "Shingles",
            "description": "Shingles, also known as herpes zoster, is a viral infection caused by the reactivation of the varicella-zoster virus, the same virus that causes chickenpox. It is characterized by a painful rash that usually appears as a band or strip of blisters on one side of the body.",
            "treatment": "Treatment for shingles may include antiviral medications, such as acyclovir or valacyclovir, to reduce the severity and duration of the outbreak. Pain medications and topical treatments may also be prescribed to alleviate symptoms."
        },
        {
            id: 9,
            "image":require("../assets/diseases/BA-cellulitis.jpg"),
            diseaseName: 'Acne',
            description: 'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It often causes pimples, blackheads, and whiteheads on the face, forehead, chest, and back.',
            treatment: 'Treatment options for acne include over-the-counter creams, prescription medications, and medical procedures such as laser therapy and chemical peels.',
        },
        {
            id: 10,
            "image":require("../assets/diseases/BA-cellulitis.jpg"),
            diseaseName: 'Eczema',
            description: 'Eczema, also known as atopic dermatitis, is a chronic skin condition characterized by dry, itchy, and inflamed skin. It often appears as red patches on the face, hands, elbows, and knees.',
            treatment: 'Treatment for eczema may include moisturizers, topical corticosteroids, antihistamines, and lifestyle changes to avoid triggers such as certain foods and environmental allergens.',
        },
        {
            id: 11,
            "image":require("../assets/diseases/BA-cellulitis.jpg"),
            diseaseName: 'Psoriasis',
            description: 'Psoriasis is a chronic autoimmune condition that causes rapid skin cell growth, leading to thick, red, and scaly patches on the skin. It can affect any part of the body, including the scalp, elbows, knees, and lower back.',
            treatment: 'Treatment options for psoriasis include topical treatments, phototherapy, oral medications, and biologic drugs that target the immune system.',
        },
    ];

    const disease = skinDiseases.find(disease => disease.id === id);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_300Light,
        Poppins_700Bold,
        Poppins_900Black,
      });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 50, width: '100%', paddingHorizontal: 20 }}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={32} color="black" style={{}} />
                <Text style={{ fontFamily: 'Poppins_700Bold',fontSize: 22, textAlign: 'center', width: '80%' }}>{disease.diseaseName}</Text>
            </View>
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center' }}>

                {imageData != undefined ? <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                    <Image source={{ uri: imageData.uri }} style={{ aspectRatio: 1.22 / 1, width: '95%', height: 140, borderRadius: 20, borderWidth: 1, borderColor: 'blue' }} />
                    <Text style={{fontFamily: 'Poppins_700Bold', marginVertical: 10, fontSize: 15, fontWeight: '600', letterSpacing: 1 }}>Scanned Image</Text>
                </View> : <View></View>}
                <View style={{ marginLeft: 5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                    <Image source={disease.image} style={{ aspectRatio: 1.22 / 1, width: '95%', height: 140, borderRadius: 20 }} />
                    <Text style={{ fontFamily: 'Poppins_700Bold',marginVertical: 10, fontSize: 15, fontWeight: '600', letterSpacing: 1 }}>Disease Image</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, width: '90%', alignSelf: 'center', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 22, width: 'auto', marginBottom: 10 }}>Overview </Text>
                <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 15, color: 'black', letterSpacing: 0.5 }}>{disease.description}</Text>
            </View>
            <View style={{ marginTop: 50, width: '90%', alignSelf: 'center', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text style={{ fontFamily: 'Poppins_700Bold',fontSize: 22, width: 'auto', marginBottom: 10 }}>Treatment </Text>
                <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 15, color: 'black', letterSpacing: 0.5 }}>{disease.treatment}</Text>
            </View>
            <View style={styles.footer} >
                <TouchableOpacity style={{ borderRadius: 30, backgroundColor: 'rgb(97,72,194)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 14, paddingHorizontal: 17 }}>
                    <Text style={{fontFamily: 'Poppins_700Bold', color: 'white', fontSize: 15, letterSpacing: 1.9 }}>Share With Dr.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NearbyClinics')} style={{ borderRadius: 30, backgroundColor: 'rgb(97,72,194)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 14, paddingHorizontal: 17 }}>
                    <Text style={{fontFamily: 'Poppins_700Bold', color: 'white', fontSize: 15, letterSpacing: 1.9 }}>Nearby Clinic</Text>
                </TouchableOpacity>
            </View>
            {/* <Button title="Share with Doctor" />
            <Button title="Nearby Clinic" onPress={() => navigation.navigate('NearbyClinics')} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        bottom: 10,
    }
});

export default DetectedDiseaseScreen;
