import React, { useEffect } from "react";
import { ScrollView } from "react-native";

import styles from './styles';
import { categories } from "../../utils/categories";
import Category from "../Category";

type Props = {
    categorySelected: string,
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory, hasCheckBox}) => {

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                        activeOpacity={0.7}
                    />
                ))
            }
        </ScrollView>
    );
}

export default CategorySelect;