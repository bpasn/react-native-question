import { StyleSheet, Text, View } from 'react-native';

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
    console.log(incorrectAnswers.splice(startIndex,0,correctAnswer))
    return (
        <View style={styles.listItem}>
            <Text style={styles.question}>
                No. {id} {question}
            </Text>
            {incorrectAnswers.splice(startIndex,0,correctAnswer)}
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