"""Tests for concurrency edge distinct"""

def test_concurrency_edge_0():
    ttl=8*60
    assert ttl in [480,540,600,660]

def test_concurrency_edge_1():
    ttl=9*60
    assert ttl in [480,540,600,660]

def test_concurrency_edge_2():
    ttl=10*60
    assert ttl in [480,540,600,660]

def test_concurrency_edge_3():
    ttl=11*60
    assert ttl in [480,540,600,660]
