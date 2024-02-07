import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface ItemQuestionProps {
    question: IQuestion & { id: number; };
}

const ItemQuestion = ({
    question: {
        id,
        type,
        difficulty,
        category,
        question,
        correctAnswer,
        incorrectAnswers
    }
}: ItemQuestionProps) => {
    const startIndex = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    useEffect(() => {
        incorrectAnswers.splice(startIndex,0,correctAnswer)
    },[])
    return (
        <View style={styles.listItem}>
            <Text style={styles.question}>
                No. {id} {question}
            </Text>
            <View>
                <FlatList
                    data={incorrectAnswers}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    listItem: {
        padding: 20,
    },
    question: {
        fontWeight: "600",
        fontSize: 18
    }
});
export default ItemQuestion;