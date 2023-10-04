package com.solirius.portfolio.utils;

import com.solirius.portfolio.item.Item;
import com.solirius.portfolio.item.ItemDTO;

public interface Mapper<E, D> {
    D mapToDTO(E entity);
    E mapFromDTO(D dto);
}
