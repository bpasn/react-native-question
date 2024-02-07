import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ItemQuestion from './components/ItemQuestion';

export default function App() {
  const [question, setQuestion] = useState<IQuestion[]>([]);

  const getQuiz = async () => {
    let url: string = "https://opentdb.com/api.php?amount=50&type=multiple";
    const result = await fetch(url);
    if (result.ok) {
      const data: IResponseAPI = await result.json();
      const mapDataQuestion: IQuestion[] = data.results.map(q => ({
        type: q.type,
        difficulty: q.difficulty,
        category: q.category,
        question: q.question,
        correctAnswer: q.correct_answer,
        incorrectAnswers: q.incorrect_answers
      }));
      setQuestion(mapDataQuestion);
    }
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={question}
        renderItem={({ item, index }) => <ItemQuestion question={{ ...item, id: index + 1 }} />}
        keyExtractor={item => item.question}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
